import Link from 'next/link'
import { useRouter } from 'next/router'
import getTemplates from '@/lib/getTemplates'

export default function BDayIndexPage({ templateFiles }) { // props: cards
  // const bdayTemplates = ['bday1', 'bday2', 'bday3', 'bday4', 'bday5']

  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  if (!templateFiles) return <div>No such template</div>

  return (
    <div id="main" className="container p-3">
      <div className="row border">
        {templateFiles.bday.map((template) => (
          <div key={template} className="col-12 col-sm-6 col-lg-4 border">
            <Link href={`/draft/template?iframe=${template.replace(/\.[^/.]+$/, '')}`}>
              <div onClick={() => {
                console.log('HOW') // eslint-disable-line
              }}
              >
                <iframe
                  src={`/templates/bday/${template.replace(/\.[^/.]+$/, '')}.html`} // JUST THIS PART: src={`/api/templates/bday/${template}`}
                  onClick={() => {
                    console.log('HOW') // eslint-disable-line
                  }}
                  className="border mb-2 card-img-top embed-responsive-item"
                  allowFullScreen
                />
                <div className="card-body text-center" />
                <h6 className="card-title mb-2 mx-auto text-center">send card</h6>
              </div>
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
