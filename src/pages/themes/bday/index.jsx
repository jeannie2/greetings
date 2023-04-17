import Link from 'next/link'
import { useRouter } from 'next/router'
import getTemplates from '@/lib/getTemplates'

export default function BDayIndexPage({ templateFiles }) { // props: cards
  // const bdayTemplates = ['bday1', 'bday2', 'bday3', 'bday4', 'bday5']

  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  if (!templateFiles) return <div>No such template</div>

  return (
    <div id="bday-index" className="container p-3">
      <div className="row">
        {templateFiles.bday.map((template) => (
          <div key={template} className="col-12 col-sm-6 col-lg-4">
            <Link href={`/draft/template?iframe=${template.replace(/\.[^/.]+$/, '')}`}>

              <iframe
                src={`/templates/bday/${template.replace(/\.[^/.]+$/, '')}.html`} // JUST THIS PART: src={`/api/templates/bday/${template}`}
                className="border mb-2 card-img-top embed-responsive-item"
                height="200px"
                allowFullScreen
              />
              <div className="card-body text-center" />
              <h6 className="card-title mb-2 mx-auto text-center font-italic send-link">VIEW</h6>
            </Link>
          </div>

        ))}

      </div>
    </div>
  )
}

export function getStaticProps() {
  // const templateFiles = await apiGetFiles()
  // const res = await fetch('http://localhost:3000/api/allTemplates')

  // const templateFiles = await res.json()
  // console.log(`HANN${apiGetFiles()}`)

  const templateFiles = getTemplates()

  return {
    props: {
      templateFiles
    }
  }
}

/*
<div key={template} className="col-12 col-sm-6 col-lg-8 border">
<h6 className="card-title mb-2 mx-auto text-center">send card</h6>
bg-black [yellow] pattern-diagonal-lines-lg
*/
