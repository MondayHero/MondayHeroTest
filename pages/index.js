import Link from 'next/link'
import Layout from '../components/MHLayout'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Main from '../components/Main'
import BoxSpecial from '../components/Box-special'
import Cta from '../components/cta'
import Footer from '../components/Footer'

const generic ={
    name: 'MondayHero'
} 

const Index = () => (
    <Layout>
        <Header />
        <Banner />
        <Main />
        <BoxSpecial />
        <Cta />
        <Footer name={generic.name} />
    </Layout>
)

export default Index