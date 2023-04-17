import Link from 'next/link'
import { useRouter } from 'next/router'
import getTemplates from '@/lib/getTemplates'

export default function ThankYouIndexPage({ templateFiles }) { // props: cards
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  if (!templateFiles) return <div>No such template</div>

  return (
    <div id="thankyou-index" className="container p-3">
      <div className="row">
        {templateFiles.thankyou.map((template) => (
          <div key={template} className="col-12 col-sm-6 col-lg-4">
            <Link href={`/draft/template?iframe=${template.replace(/\.[^/.]+$/, '')}`}>

              <iframe
                src={`/templates/thankyou/${template.replace(/\.[^/.]+$/, '')}.html`} // src={`/api/templates/thankyou/${template}`}
                className="border mb-2 card-img-top embed-responsive-item"
                height="200px"
                allowFullScreen
              />
              <div className="card-body text-center" />
              <h6 className="card-title mb-2 mx-auto text-center send-link">VIEW</h6>

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
