import siteConfig from '../siteConfig'

function Fask_question() {
  return (
    <>
      <div className="f-ask-container m-auto mt-14 w-[80%]">
        {/* text section */}
        <div className="f-ask-box  mb-10 flex items-center justify-center border-b-2  border-white">
          <h4 className="primary_text_color mb-5 p-2 text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions
          </h4>
        </div>
        <div className="accordion " id="accordionExample">
          {siteConfig.faq.accordian.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h4 className="accordion-header" id={`heading-${item.id}`}>
                <button
                  className="
          secondary
          collapsed
          accordion-button
          relative
          mt-2
          flex
          w-full
          items-center
          rounded-none border-b-2 border-white
          py-4
          px-5
          text-left
          text-base
          text-white
          transition
          focus:outline-none
        "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${item.id}`}
                  style={{ backgroundColor: 'black', color: 'white' }}
                >
                  {item.question}
                </button>
              </h4>
              <div
                id={`collapse${item.id}`}
                className="accordion-collapse collapse "
                aria-labelledby={`heading-${item.id}`}
                data-bs-parent="#accordionExample"
                style={{ backgroundColor: '#303030' }}
              >
                <div className="accordion-body primary_text_color py-4 px-5">
                  {item.answer}
                  <p>{item.p1}</p>
                  <p>{item.p2}</p>
                  <p>{item.p3}</p>
                  <p>{item.p4}</p>
                  <p>{item.p5}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fask_question
