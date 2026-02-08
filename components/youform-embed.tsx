"use client"

interface YouformEmbedProps {
  height?: number
}

export function YouformEmbed({ height = 800 }: YouformEmbedProps) {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://app.youform.com/forms/zyclclgy"
        width="100%"
        height={height}
        style={{ border: "none", maxWidth: "100%" }}
        title="Contact Form"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
