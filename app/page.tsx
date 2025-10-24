import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-30px-42px-30px)] items-center justify-center">
      <main className="flex flex-col w-full px-5">
        <Hero />
      </main>
    </div>
  );
}
