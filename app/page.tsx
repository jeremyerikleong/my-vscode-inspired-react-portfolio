import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="flex-center flex-col h-[calc(100vh-30px-42px-30px)]">
      <main className="flex flex-col w-full">
        <Hero />
      </main>
    </div>
  );
}
