import React from 'react'

// const highlightImportantPhrases = (text) => {
//   const importantPhrases = ['cost', 'price', 'fee', 'charges', 'Rs\\.', 'USD'];
//   const regex = new RegExp(`(.*(?:${importantPhrases.join('|')}).*[\n\r]*)`, 'gi');
//   return text.replace(regex, '<strong>$1</strong>');
// };


const AboutTreatment = ({data}) => {

  const parseOverview = (overview) => {
    const costRegex = /(.*? cost in India for Indian Patients is between .*? to .*?\. Cost for International patients is between .*? to .*?\.)/;
    const stayRegex = /(Patient has to stay .*?\.)/;
    const descriptionRegex = /(?:Cost for International patients .*?\.\s)(.*)/;

    const costMatch = overview.match(costRegex);
    const stayMatch = overview.match(stayRegex);
    const descriptionMatch = overview.match(descriptionRegex);

    const cost = costMatch ? costMatch[1] : '';
    const stay = stayMatch ? stayMatch[1] : '';
    const description = descriptionMatch ? descriptionMatch[1] : '';

    return { cost, stay, description };
  };
  const { cost, stay, description } = parseOverview(data.overview);

  return (
    <div>
        <div className='flex justify-center text-3xl text-neutral-500 font-bold '>
        About <h1 className='text-cyan-500'>&nbsp;{data.departmentID.treatment}</h1>
        </div>

        <div className='justify-start max-w-4xl ml-16 mt-6 '>
            <div className='text-xl font-bold mb-8 '>
            {/* Congenital Heart Disease Chd Treatment cost in India for Indian Patients is
            between Rs.177600 to Rs.236800. Cost for International patients is between USD
            3600 to USD 4400. */}
            {cost}
            </div>

            <div className='text-lg text-neutral-700 mb-4 '>
            {/* Patient has to stay in the hospital for 2 days and outside the hospital for 15 days. The
            total cost of the treatment depends on the diagnosis and facilities opted by the
            patient. */}

            {stay}
           
            </div>

            <div className='text-lg text-neutral-700 '>
           
            {/* Congenital Heart Disease is present at birth and can affect the structure of a baby’s
            heart and the way it works. They can affect how blood flows through the heart and out
            to the rest of the body. CHDs can vary from mild to severe.
            CHD treatment depends on the type and severity of the defect present. Some
            affected infants and children might need one or more surgeries to repair the heart or
            blood vessels. Some can be treated without surgery using a procedure called cardiac
            catheterization. */}
            {description}
            </div>

        </div>
    </div>
  )
}

export default AboutTreatment