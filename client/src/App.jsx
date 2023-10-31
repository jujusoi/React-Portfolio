import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <header style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Header />
        </header>
        <main style={{width: '100%', display: 'flex', justifyContent: 'center'}} >
          <Outlet />
        </main>
        <footer style={{width: '100%',  display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Footer />
        </footer>
    </ApolloProvider>
  );
};

export default App;
