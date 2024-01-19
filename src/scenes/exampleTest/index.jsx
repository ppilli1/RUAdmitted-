
const ExampleTest = () => {
  return(
    <div className = "w-3/4 m-auto">
      <div className = "mt-20">
        {projects.map((d, index) => (
          <div key = {index} className = "bg-white h-[450px] text-black rounded-xl">
            <div className = "h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
              <img src = {d.image} alt = "" className = "h-44 w-44 rounded-full"/>
            </div>
            <div className = "flex flex-col justify-center items-center gap-4 p-4">
              <p>{d.title}</p>
              <p>{d.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExampleTest



const projects = [
    {
      title: "Delirium's Impact",
      image: "../../assets/slide-1.png",
      description:
        'Imagine an elderly patient like Grandma admitted for a UTI, experiencing delirium, leading to falls, agitation, and an ICU transfer. This scenario, caused by delirium, affecting 20-29% of older patients, is common, with significant implications for patient care and hospital resources.',
    },
    {
      title: "Delirium's High Costs",
      image: "../../assets/slide-2.png",
      description:
        'Delirium affects 7 million patients annually, costing an additional $50,000 per patient. Hospital stays are extended by 3.45 days, contributing to a $6-$80 billion burden on CMS in 2019. MinDerva, aims to address this issue with targeted interventions and potential savings.',
    },
    {
      title: "MinDerva - A Preventive Solution",
      image: "../../assets/slide-3.png",
      description:
        'MinDerva, an evidence-based application, tackles delirium through interactive day modes and computer-vision-based night modes. This approach engages patients, maintains circadian rhythms, and detects agitation, offering a comprehensive solution.',
    },
    {
      title: "Implementation and Potential Savings",
      image: "../../assets/slide-4.png",
      description:
        "MinDerva's implementation involves nurse-initiated setup, family content uploads, and patient eligibility based on admission criteria. Potential savings are substantial, with $10,000 per delirious patient, translating to $142 million at a single large tertiary care center.",
    },
    {
      title: "Market Strategy and Future Development",
      image: "../../assets/slide-5.png",
      description:
        "MinDerva's market strategy involves a subscription-based licensing model at $50/day per patient. The initial implementation at RWJUH shows potential savings of $675 million annually with a national rollout. Future developments include home versions and integration with electronic medical records (EMR).",
    },
  ];