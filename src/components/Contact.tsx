export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen max-w-6xl mx-auto px-4 py-12 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl text-[#1F2937] font-bold mb-6 2xl:text-[50px] ">
        Contact
      </h2>
      <div className="space-y-4">
        <p className="text-lg">
          📧 Email:
          <a
            href="mailto:rnjswls060@naver.com"
            className="text-blue-500 hover:underline"
          >
            rnjswls060@naver.com
          </a>
        </p>
        <p className="text-lg">
          💻 GitHub:
          <a
            href="https://github.com/kwonjin2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/kwonjin2
          </a>
        </p>
      </div>
    </section>
  );
}
