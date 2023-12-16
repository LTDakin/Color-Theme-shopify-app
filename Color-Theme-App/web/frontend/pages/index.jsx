import { Page, Layout } from "@shopify/polaris";

import { ImagesCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <Layout>
        <Layout.Section>
          <ImagesCard></ImagesCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
