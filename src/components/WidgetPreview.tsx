import { useState } from "react";

export interface WidgetPreviewProps {
  name: string;
  description: string;
  url: string;
}

export default function WidgetPreview({
  name,
  description,
  url,
}: WidgetPreviewProps) {
  const [copied, setCopied] = useState(false);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Could not copy widget URL:",
        error,
      );
    }
  }

  return (
    <article className="overflow-hidden border-2 border-white/15 bg-[#111218] shadow-[5px_5px_0_#000] transition hover:-translate-y-1 hover:border-[#ffe600] hover:shadow-[5px_5px_0_#ffe600]">
      {/* Preview */}

      <div className="h-64 w-full overflow-hidden bg-[#080a10]">
        <iframe
          src={url}
          title={`${name} preview`}
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>

      {/* Information */}

      <div className="border-t-2 border-white/10 p-5">
        <h2 className="font-pixel text-xs text-white">
          {name.toUpperCase()}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <button
          type="button"
          onClick={copyUrl}
          className="mt-5 flex w-full items-center justify-center gap-3 border-2 border-white px-4 py-3 font-pixel text-[7px] text-white transition hover:bg-white hover:text-black active:translate-y-1"
        >
          {copied ? "✓ COPIED!" : "▣ COPY EMBED URL"}
        </button>
      </div>
    </article>
  );
}