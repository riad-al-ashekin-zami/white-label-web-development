import { homepageImages } from "@/config/images";

export function ImageSlot({ id, circular = false }: { id: string; circular?: boolean }) {
  const slot = homepageImages[id];
  if (!slot) return null;
  return <div className={`home-image-slot ${circular ? "home-headshot" : ""}`} style={{ aspectRatio: `${slot.width} / ${slot.height}` }}>
    {slot.url ? <img src={slot.url} alt={slot.alt} width={slot.width} height={slot.height} loading="lazy" decoding="async" /> : <span>{id}<br />{slot.label}<br />{slot.width}×{slot.height}</span>}
  </div>;
}