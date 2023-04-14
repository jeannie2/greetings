// need getStaticPaths?
// http://localhost:3000/api/test

import Link from 'next/link'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { useRouter } from 'next/router'

import getTemplates from '@/lib/getTemplates'

/*

      <img className="mb-2 rounded-circle" src="${listing.user.avatar}" alt="user avatar" width="50" height="50" />

      </div>
      </a>
    </div>
  */

// EXTRACT TEMPLATE NAME - more elegant way
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
                  src={`/templates/bday/${template.replace(/\.[^/.]+$/, '')}.html`} // src={`/api/templates/bday/${template}`}
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

/*
import { apiGetFiles } from '@/pages/api/test' //  { test }

 <Link href={`/cards/${template}`}>

   <div className="container">
      <div className="row">
        {bdayTemplates.map((template) => (
          <div className="col-12 col-sm-6 col-lg-3 mx-3 border border-primary border-2" key={template}>
            <iframe src={`/templates/${template}.html`} />
          </div>
        ))}
      </div>
    </div>

    export async function getStaticProps() {
  const cards = await apiGetCards()

  return {
    props: {
      cards
    }
  }
} */

/* export default function SSGIndex({ cards }) {
  return cards.map((card) => (
    <div key={card.id}>
      <Link href={`/ssg/${card.id}`}>
        <a>{card.title}</a>
      </Link>
    </div>
  ))
}
*/

/*
return (
    <Container>
      <Row>
        {bdayTemplates.map((template) => (
          <Col
            lg={3}
            xs={12}
            sm={6}
            className="border border-primary border-2"
            height="50%"
            key={template}
          >
            <Link href="/test">
              <iframe
                src={`/templates/${template}.html`}
                onClick={() => {
                  console.log('HOW')
                }}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>

  )
}

-----

/*           <div id="iframe-container" className="position-absolute">
                <iframe
                  src={`/templates/bday/${template}`}
                  onClick={() => {
                    console.log('HOW')
                  }}
                />
              </div> */
/*
export async function getStaticProps({ params }) {
  const card = await apiGetCard(params.id)

  return {
    props: {
      card
    }
  }
}

export async function getStaticPropsOG() {
  // const templateFiles = await apiGetFiles()
  // const res = await fetch('http://localhost:3000/api/test')

  // const templateFiles = await res.json()
  // console.log(`HANN${apiGetFiles()}`)

  return {
    props: {
      templateFiles
    }
  }
}
*/
