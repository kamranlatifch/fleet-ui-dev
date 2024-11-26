import {
  Navbar,
  Hero,
  AdventureCarousal,
  TravelCarousal,
  HowItWork,
  StunningWork,
  GoSomewhere,
  Planning,
  PropertyType,
  ExploreSection,
  BestHost,
  TravelKit,
  BrowseByCategory,
  Footer,
} from '@components';

function App() {
  return (
    <div className='xl:max-w-[1440px] m-auto'>
      <Navbar />
      <Hero />
      <AdventureCarousal />
      <TravelCarousal />
      <HowItWork />
      <StunningWork />
      <GoSomewhere />
      <Planning />
      <PropertyType />
      <ExploreSection />
      <BestHost />
      <TravelKit />
      <BrowseByCategory />
      <Footer />
    </div>
  );
}

export default App;
