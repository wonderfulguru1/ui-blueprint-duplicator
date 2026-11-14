import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import karsana from "@/assets/now-selling-karsana-phase-2.jpeg";
import skyline from "@/assets/now-selling-skyline-idu.jpeg";
import peniel from "@/assets/now-selling-peniel-luxury-villa.jpeg";
import birnin from "@/assets/now-selling-birnin-zamani.jpeg";

type Slide = { id: string; title: string; image: string; link: string };
type Promotion = {
  enabled: boolean;
  title: string;
  button: string;
  slides: Slide[];
};
const bucket = "product-images";
const configPath = "promotions/now-selling.json";
const enquiry = (title: string) =>
  `https://wa.me/2348065046516?text=${encodeURIComponent(`Hello Genesia Properties, I would like to learn more about ${title}.`)}`;
const initial: Promotion = {
  enabled: true,
  title: "Now Selling",
  button: "Learn more",
  slides: [
    {
      id: "karsana",
      title: "Karsana Phase 2",
      image: karsana,
      link: enquiry("Karsana Phase 2"),
    },
    {
      id: "skyline",
      title: "Skyline Exclusive City, Idu",
      image: skyline,
      link: enquiry("Skyline Exclusive City, Idu"),
    },
    {
      id: "peniel",
      title: "Peniel Luxury Villa, Gwagwalada",
      image: peniel,
      link: enquiry("Peniel Luxury Villa, Gwagwalada"),
    },
    {
      id: "birnin",
      title: "Birnin Zamani, Apo Waru-Burun",
      image: birnin,
      link: enquiry("Birnin Zamani, Apo Waru-Burun"),
    },
  ],
};

function safeLink(value: string) {
  if (value.startsWith("/") && !value.startsWith("//") && !value.includes("\\"))
    return true;
  try {
    return ["https:", "http:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}
function validate(value: Promotion) {
  if (
    typeof value.enabled !== "boolean" ||
    !value.title?.trim() ||
    !value.button?.trim()
  )
    throw new Error("Enter a title and button label.");
  if (
    !Array.isArray(value.slides) ||
    value.slides.length > 12 ||
    (value.enabled && value.slides.length === 0)
  )
    throw new Error("Add between 1 and 12 slides, or turn the popup off.");
  const ids = new Set<string>();
  for (const slide of value.slides) {
    if (
      !slide.id ||
      ids.has(slide.id) ||
      !slide.title?.trim() ||
      !safeLink(slide.image) ||
      !safeLink(slide.link)
    )
      throw new Error(
        "Each slide needs a unique ID, title, image, and valid website link.",
      );
    ids.add(slide.id);
  }
  return value;
}
async function loadPromotion(): Promise<Promotion> {
  const { data } = supabase.storage.from(bucket).getPublicUrl(configPath);
  const response = await fetch(`${data.publicUrl}?v=${Date.now()}`, {
    cache: "no-store",
  });
  if (response.status === 404 || response.status === 400) {
    // Storage returns 400 with a 404 statusCode for a missing object.
    const body = await response.json().catch(() => ({}));
    if (
      response.status === 404 ||
      String(body.statusCode) === "404" ||
      body.error === "not_found"
    )
      return initial;
    throw new Error("Could not load popup settings. Please try again.");
  }
  if (!response.ok)
    throw new Error("Could not load popup settings. Please try again.");
  return validate(await response.json());
}
function usePromotion() {
  return useQuery({
    queryKey: ["now-selling"],
    queryFn: loadPromotion,
    staleTime: 30000,
    retry: 1,
  });
}

export function NowSellingModal() {
  const { data, isSuccess } = usePromotion();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const shown = useRef(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!isSuccess || !data?.enabled || !data.slides.length || shown.current)
      return;
    shown.current = true;
    const timer = window.setTimeout(() => setOpen(true), 650);
    return () => window.clearTimeout(timer);
  }, [isSuccess, data]);
  const slides = data?.slides ?? [];
  const activeIndex = slides.length ? index % slides.length : 0;
  const slide = slides[activeIndex];
  const move = (direction: number) =>
    setIndex(
      (current) => (current + direction + slides.length) % slides.length,
    );
  useEffect(() => {
    if (
      !open ||
      paused ||
      hovered ||
      focused ||
      reducedMotion ||
      slides.length < 2
    )
      return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [open, paused, hovered, focused, reducedMotion, slides.length, index]);
  if (!slide || !data?.enabled) return null;
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="selling-overlay" />
        <Dialog.Content
          className="selling-modal"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            document.getElementById("selling-close")?.focus();
          }}
        >
          <header className="selling-header">
            <div>
              <p>GENESIA PROPERTIES · FEATURED OFFERS</p>
              <Dialog.Title>{data.title}</Dialog.Title>
              <Dialog.Description>
                Your next chapter starts with the right plot.
              </Dialog.Description>
            </div>
            <Dialog.Close
              id="selling-close"
              className="selling-close"
              aria-label="Close now selling"
            >
              <X size={21} />
            </Dialog.Close>
          </header>
          <div
            className="selling-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Now selling properties"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setFocused(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
              }
            }}
          >
            <div
              className="selling-image"
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${slides.length}: ${slide.title}`}
            >
              <img
                src={slide.image}
                alt={`${slide.title} — property offer flyer`}
                key={slide.id}
              />
            </div>
            {slides.length > 1 && (
              <>
                <button
                  className="selling-prev"
                  aria-label="Previous offer"
                  onClick={() => move(-1)}
                >
                  <ChevronLeft />
                </button>
                <button
                  className="selling-next"
                  aria-label="Next offer"
                  onClick={() => move(1)}
                >
                  <ChevronRight />
                </button>
              </>
            )}
            <div className="selling-controls">
              <div className="selling-dots">
                {slides.map((item, i) => (
                  <button
                    key={item.id}
                    aria-label={`Show ${item.title}`}
                    aria-pressed={i === activeIndex}
                    onClick={() => setIndex(i)}
                    className={i === activeIndex ? "active" : ""}
                  />
                ))}
              </div>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
              {!reducedMotion && slides.length > 1 && (
                <button
                  aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? <Play size={16} /> : <Pause size={16} />}
                </button>
              )}
            </div>
          </div>
          <footer className="selling-footer">
            <p aria-live="polite">{slide.title}</p>
            <a
              href={slide.link}
              className="selling-cta"
              onClick={() => setOpen(false)}
            >
              {data.button}
              <ArrowUpRight size={19} />
            </a>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function NowSellingManager() {
  const { data, isLoading, error, refetch } = usePromotion();
  const queryClient = useQueryClient();
  const [draft, setDraft] = useState<Promotion | null>(null);
  const [files, setFiles] = useState<Record<string, File>>({});
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const previewUrls = useRef<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (data && !draft) setDraft(structuredClone(data));
  }, [data, draft]);
  useEffect(
    () => () => previewUrls.current.forEach((url) => URL.revokeObjectURL(url)),
    [],
  );
  const update = (id: string, patch: Partial<Slide>) =>
    setDraft(
      (current) =>
        current && {
          ...current,
          slides: current.slides.map((slide) =>
            slide.id === id ? { ...slide, ...patch } : slide,
          ),
        },
    );
  const reorder = (position: number, offset: number) =>
    setDraft((current) => {
      if (!current) return current;
      const slides = [...current.slides];
      [slides[position], slides[position + offset]] = [
        slides[position + offset],
        slides[position],
      ];
      return { ...current, slides };
    });
  async function save(event: React.FormEvent) {
    event.preventDefault();
    if (!draft) return;
    setBusy(true);
    setMessage("");
    setFailed(false);
    try {
      // Validate the whole form before uploading any files.
      validate({
        ...draft,
        slides: draft.slides.map((slide) =>
          files[slide.id] ? { ...slide, image: "/pending-upload" } : slide,
        ),
      });
      const saved = structuredClone(draft);
      for (const slide of saved.slides) {
        const file = files[slide.id];
        if (!file) continue;
        if (
          !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
          file.size > 8 * 1024 * 1024
        )
          throw new Error("Use a JPG, PNG, or WebP image smaller than 8 MB.");
        const ext =
          file.type === "image/jpeg" ? "jpg" : file.type.split("/")[1];
        const name = `promotions/${crypto.randomUUID()}.${ext}`;
        const { error } = await supabase.storage
          .from(bucket)
          .upload(name, file, { cacheControl: "31536000", upsert: false });
        if (error) throw new Error(`Flyer upload failed: ${error.message}`);
        slide.image = supabase.storage
          .from(bucket)
          .getPublicUrl(name).data.publicUrl;
      }
      validate(saved);
      // Turn bundled images into stable public URLs, so later builds do not remove them.
      for (const slide of saved.slides) {
        if (!slide.image.startsWith("/")) continue;
        const response = await fetch(slide.image);
        if (!response.ok)
          throw new Error(
            "Could not prepare the original flyer. Please try again.",
          );
        const name = `promotions/${crypto.randomUUID()}.jpg`;
        const { error } = await supabase.storage
          .from(bucket)
          .upload(name, await response.blob(), {
            contentType: "image/jpeg",
            cacheControl: "31536000",
            upsert: false,
          });
        if (error) throw new Error(`Flyer upload failed: ${error.message}`);
        slide.image = supabase.storage
          .from(bucket)
          .getPublicUrl(name).data.publicUrl;
      }
      const { error } = await supabase.storage
        .from(bucket)
        .upload(
          configPath,
          new Blob([JSON.stringify(saved)], { type: "application/json" }),
          { contentType: "application/json", cacheControl: "0", upsert: true },
        );
      if (error)
        throw new Error(`Settings were not published: ${error.message}`);
      queryClient.setQueryData(["now-selling"], saved);
      setDraft(saved);
      setFiles({});
      setPreviews({});
      setMessage("Published. New visitors will see your updated popup.");
    } catch (error) {
      setFailed(true);
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not publish. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  if (isLoading) return <p role="status">Loading popup settings…</p>;
  if (error)
    return (
      <div role="alert">
        <p>{error.message}</p>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    );
  if (!draft) return null;
  return (
    <form className="selling-editor" onSubmit={save}>
      <fieldset disabled={busy}>
        <div className="selling-editor-heading">
          <div>
            <h2>Now Selling popup</h2>
            <p>
              Manage the welcome popup, flyers, and enquiry links. Changes are
              shared across the website when you publish.
            </p>
          </div>
          <label className="selling-enabled">
            <input
              type="checkbox"
              checked={draft.enabled}
              onChange={(event) =>
                setDraft({ ...draft, enabled: event.target.checked })
              }
            />
            Show popup
          </label>
        </div>
        <div className="selling-form-grid">
          <label>
            Popup title
            <input
              required
              maxLength={60}
              value={draft.title}
              onChange={(event) =>
                setDraft({ ...draft, title: event.target.value })
              }
            />
          </label>
          <label>
            Button text
            <input
              required
              maxLength={35}
              value={draft.button}
              onChange={(event) =>
                setDraft({ ...draft, button: event.target.value })
              }
            />
          </label>
        </div>
        <p className="selling-editor-help">
          Flyers play in the order below. Upload JPG, PNG, or WebP files up to 8
          MB. The button opens the current flyer’s link.
        </p>
        {draft.slides.map((slide, i) => (
          <article className="selling-edit-slide" key={slide.id}>
            <div className="selling-edit-preview">
              {(previews[slide.id] || slide.image) && (
                <img
                  src={previews[slide.id] || slide.image}
                  alt={slide.title || "Flyer preview"}
                />
              )}
            </div>
            <div className="selling-edit-fields">
              <label>
                Offer name
                <input
                  required
                  maxLength={120}
                  value={slide.title}
                  onChange={(event) =>
                    update(slide.id, { title: event.target.value })
                  }
                />
              </label>
              <label>
                Replace flyer
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    setFiles((current) => ({ ...current, [slide.id]: file }));
                    const url = URL.createObjectURL(file);
                    previewUrls.current.push(url);
                    setPreviews((current) => ({ ...current, [slide.id]: url }));
                  }}
                />
              </label>
              <label>
                Button destination
                <input
                  required
                  value={slide.link}
                  placeholder="https://wa.me/… or /#/products"
                  onChange={(event) =>
                    update(slide.id, { link: event.target.value })
                  }
                />
              </label>
              <div className="selling-edit-actions">
                <span>Slide {i + 1}</span>
                <button
                  type="button"
                  disabled={i === 0}
                  onClick={() => reorder(i, -1)}
                  aria-label={`Move ${slide.title || "slide"} up`}
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  type="button"
                  disabled={i === draft.slides.length - 1}
                  onClick={() => reorder(i, 1)}
                  aria-label={`Move ${slide.title || "slide"} down`}
                >
                  <ArrowDown size={16} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setDraft({
                      ...draft,
                      slides: draft.slides.filter(
                        (item) => item.id !== slide.id,
                      ),
                    })
                  }
                  aria-label={`Remove ${slide.title || "slide"}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
        <div className="selling-editor-buttons">
          <button
            type="button"
            disabled={draft.slides.length >= 12}
            onClick={() =>
              setDraft({
                ...draft,
                slides: [
                  ...draft.slides,
                  {
                    id: crypto.randomUUID(),
                    title: "",
                    image: "",
                    link: enquiry("this property"),
                  },
                ],
              })
            }
          >
            <Plus size={17} />
            Add flyer
          </button>
          <button className="selling-publish" type="submit">
            <Save size={17} />
            {busy ? "Publishing…" : "Publish popup"}
          </button>
        </div>
      </fieldset>
      {message && (
        <p
          className={failed ? "selling-save-error" : "selling-save-success"}
          role={failed ? "alert" : "status"}
        >
          {message}
        </p>
      )}
    </form>
  );
}
