import { Suspense } from "react";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

import ProductsTable from "@app/admin/_components/ProductsTable";

function Products({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);

  return (
    <Main>
      <Section
        className={[
          "flex",
          "flex-col",
          "justify-center",
          "min-h-screen",
          "p-4 sm:p-16 bg-gray-800",
        ]}
      >
        <Container>
          <Suspense
            fallback={
              <div className="animate-pulse rounded-md bg-primary/10">
                <p>Loading feed...</p>
              </div>
            }
          >
            <ProductsTable page={page} />
          </Suspense>
        </Container>
      </Section>
    </Main>
  );
}

export default Products;
