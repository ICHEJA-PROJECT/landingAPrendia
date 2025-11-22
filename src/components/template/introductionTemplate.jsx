import alfi from "../../../public/img/Alfi.png"
import TitlePrimary from "../atoms/titlePrimary"
import useParallax from "../../hooks/useParallax"
import useInView from "../../hooks/useInView"
import PrimaryButton from "../atoms/button"

const IntroductionTemplate = () => {
    const offsetY = useParallax(0.3)
    const [refImage, isImageInView] = useInView()
    const [refText, isTextInView] = useInView()
    const [refTitle, isTitleInView] = useInView()

    const handleMeInteresa = () => {
        const element = document.getElementById('me-interesa')
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <section className="
            flex flex-col items-center justify-start
            pt-8 sm:pt-4 md:pt-0
            min-h-[50vh] sm:min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh]
            w-full
        ">

            <div className="
                flex flex-col-reverse sm:flex-row
                justify-between items-center
                gap-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12
                w-full
            ">

                {/* TEXT SECTION */}
                <article className="
                    flex flex-col w-full sm:w-[60%] md:w-[65%] lg:w-[70%]
                    items-center justify-center
                    gap-y-3 sm:gap-y-4 md:gap-y-6 lg:gap-y-10
                    min-h-[250px] sm:min-h-[280px] md:min-h-[300px]
                ">

                    {/* TITLE */}
                    <div
                        ref={refTitle}
                        className={`
                            transition-all duration-1000 ease-out
                            w-full text-center
                            ${
                                isTitleInView
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                            }
                        `}
                        style={{ transitionDelay: "400ms" }}
                    >
                        <TitlePrimary text={"¡Aprendamos Todos!"} />
                    </div>

                    {/* PARAGRAPH */}
                    <p
                        ref={refText}
                        className={`
                            text-base sm:text-lg md:text-2xl lg:text-4xl
                            transition-all duration-1000 ease-out
                            text-justify w-[90%] sm:w-full
                            max-w-[700px] font-medium
                            ${
                                isTextInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }
                        `}
                        style={{ transitionDelay: "200ms" }}
                    >
                        APREND
                        <span className="text-pink-ia">IA</span> es mucho más que una aplicación,
                        es un puente hacia el conocimiento, la inclusión y el futuro.
                    </p>

                    {/* BUTTON */}
                    <PrimaryButton
                        text="Me interesa"
                        onClick={handleMeInteresa}
                        className="mx-auto"
                    />

                </article>

                {/* IMAGE */}
                <div className="w-full sm:w-[40%] md:w-[35%] lg:w-[40%] flex justify-center sm:justify-end">
                    <img
                        ref={refImage}
                        src={alfi}
                        alt="alfi"
                        className="
                            image-3d-hover
                            w-56 h-auto
                            sm:w-48 sm:h-[16rem]
                            md:w-64 md:h-[20rem]
                            lg:w-[26rem] lg:h-[34rem]
                            rounded-lg cursor-pointer
                            object-contain
                        "
                    />
                </div>

            </div>
        </section>
    )
}

export default IntroductionTemplate
