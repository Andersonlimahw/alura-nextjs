import FAQScreen from "../src/screens/FAQScreen";
export default FAQScreen;

// SSG - 
// export async function getStaticProps
// getStaticProps Utilizado quando o conteudo nao precisa mudar eh apenas estaticos
// entao mesmo se a api do guthub neste caso mudar fica disponivel

// export async function getServerSideProps
// getStaticProps Roda a cada acesso a page, importante para quando 
// se precisar que seja dinamica com informacoes de uma api
export async function getStaticProps() {
    console.log(`Em modo DEV sempre executa a cada acesso.`);
    console.log(`Roda SOMENTE em tempo de build`);

    const FAQ_API_URL = `https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json`;
    const faq = await fetch(FAQ_API_URL)
        .then((response) => 
            response.json()
        ).then(data => data);

    return {
        props: {
            title: `FAQ Page content`, 
            date: new Date().toISOString(),
            faq,
        }
    }
}