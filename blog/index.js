import React from 'react';
import Layout from '@theme/Layout';
import BlogList from '@theme/BlogListPage';

export default function BlogIndex() {
  return (
    <Layout title="Blog" description="Bem-vindo ao meu blog!">
      <main>
        <header className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">Bem-vindo ao Blog!</h1>
            <p className="hero__subtitle">Confira os artigos mais recentes.</p>
          </div>
        </header>
        <BlogList />
      </main>
    </Layout>
  );
}
