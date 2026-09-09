import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #090e1a 0%, #0f172a 55%, #172554 100%)",
                    color: "#ffffff",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            width: "72px",
                            height: "72px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "20px",
                            background: "#2563eb",
                            fontSize: "28px",
                            fontWeight: 700,
                        }}
                    >
                        FA
                    </div>

                    <div
                        style={{
                            fontSize: "24px",
                            color: "#94a3b8",
                        }}
                    >
                        Mobile & Full-Stack Developer
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: "64px",
                        fontWeight: 700,
                        letterSpacing: "-2px",
                        lineHeight: 1.1,
                        maxWidth: "1000px",
                    }}
                >
                    Feras Alhreibat
                </div>

                <div
                    style={{
                        display: "flex",
                        marginTop: "30px",
                        maxWidth: "950px",
                        fontSize: "32px",
                        lineHeight: 1.4,
                        color: "#cbd5e1",
                    }}
                >
                    Building reliable, scalable & clean digital experiences.
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "14px",
                        marginTop: "50px",
                    }}
                >
                    {["Flutter", "Dart", ".NET", "C#", "SQL"].map((technology) => (
                        <div
                            key={technology}
                            style={{
                                display: "flex",
                                padding: "12px 20px",
                                borderRadius: "999px",
                                border: "1px solid #334155",
                                background: "#0f172a",
                                color: "#e2e8f0",
                                fontSize: "20px",
                            }}
                        >
                            {technology}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}