import { getProducts } from "@api/products";

import Icon from "@components/ui/Icon";
import Link from "@components/ui/Link";
import Button from "@components/ui/Button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@components/ui/Table";

import Box from "@components/layouts/Box";

async function ProductsTable({ page }) {
  const products = await getProducts(page, 20);

  return (
    <Box>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="w-10 text-center">Edit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.data.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.attributes.productTitle}</TableCell>
              <TableCell className="w-10 text-center">
                <Button
                  type="submit"
                  variant="text" iconOnly
                >
                  <Icon name="Pencil" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {page < products.meta.pagination.pageCount && (
        <Button variant="outlined">
          <Link href={`?page=${page + 1}`}>
            Load More
          </Link>
        </Button>
      )}
    </Box>
  );
}

export default ProductsTable;
