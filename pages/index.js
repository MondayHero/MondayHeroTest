import Link from 'next/link'
import Layout from '../components/MHLayout'
import Main from '../components/Main'

const generic = { 
    name: 'MondayHero'
} 

const Index = () => (
    <Layout name={generic.name} isBanner Cta BoxSpecial>
        <Main />
    </Layout>
)

export default Index