import { Card, Text, Button } from "@shopify/polaris";
import React from "react";

export function ImagesCard() {
  return (
    <>
      <Card padding="500">
        Items that are being used to generate the color palletes
        <Button>Fetch Products</Button>
      </Card>
    </>
  );
}
