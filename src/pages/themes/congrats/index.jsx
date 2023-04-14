import Link from 'next/link'
import { useRouter } from 'next/router'
import getTemplates from '@/lib/getTemplates'

export default function CongratsIndexPage({ templateFiles }) { // props: cards
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  if (!templateFiles) return <div>No such template</div>

  return (
    <div id="main" className="container p-3">
      <div className="row border">
        {templateFiles.congrats.map((template) => (
          <div key={template} className="col-12 col-sm-6 col-lg-4 border">
            <Link href={`/draft/template?iframe=${template.replace(/\.[^/.]+$/, '')}`}>
              <div onClick={() => {
                console.log('HOW') // eslint-disable-line
              }}
              >
                <iframe
                  src={`/templates/congrats/${template.replace(/\.[^/.]+$/, '')}.html`} // src={`/api/templates/congrats/${template}`}
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
  const templateFiles = getTemplates()

  return {
    props: {
      templateFiles
    }
  }
}
