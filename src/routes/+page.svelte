<script lang="ts">
	import chatbot from '$lib/assets/chatbot.svg';
	import ads from '$lib/assets/ads.svg';
	import socialmedia from '$lib/assets/socialmedia.svg';
</script>

<div class="flex flex-col gap-16">
	<div class="flex flex-col gap-16 pt-8">
		<div class="p-4 flex justify-between">
			<h1 class="text-primary font-bold text-2xl">gandrade</h1>
			<a class="link" href="./clients">clientes</a>
		</div>
		<div class="flexStack gap-8">
			<div class="top-background w-full bg-center bg-repeat-space thumbnails" />
			<div class="flexStack justify-center">
				<h2 class="text-xl font-bold">marketing digital</h2>
				<h2 class="text-base">para quem</h2>
				<h2 class="text-4xl font-bold text-primary">empreende</h2>
			</div>
			<div class="bottom-background w-full bg-center bg-repeat-space thumbnails" />
		</div>
	</div>
	<div class="flex flex-col gap-16 px-4 pb-8">
		<div class="flexStack">
			<h2 class="text-base">desenvolvimento de</h2>
			<h2 class="text-3xl font-bold">Landing pages</h2>
			<h3 class="text-xl font-bold">simples, rápido e acessível</h3>
		</div>
		<div class="flexStack gap-4">
			<div class="flexStack">
				<h2 class="text-3xl font-bold">Chat Bots</h2>
				<h2 class="text-base">qualifique leads, não perca clientes</h2>
			</div>
			<img src={chatbot} alt="conversa com um chatbot" />
		</div>
		<div class="flexStack gap-4">
			<div class="flexStack">
				<h2 class="text-3xl font-bold">Tráfego Pago</h2>
				<h2 class="text-base">Seja visto na internet</h2>
			</div>
			<img src={ads} alt="anúncio na internet" />
		</div>
		<div class="flexStack gap-4">
			<div class="flexStack">
				<h2 class="text-3xl font-bold">Social Media</h2>
				<h2 class="text-base">Gestão da sua presença nas redes</h2>
			</div>
			<img src={socialmedia} alt="posts numa rede social" />
		</div>
		<div class="flexStack">
			<h2 class="text-3xl font-bold">Entre em contato já</h2>
			<h2 class="text-base">clientes não vão te esperar</h2>
			<a class="link" href="https://wa.me/5512987074510">Mande um alô</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.thumbnails {
		height: 132px;
	}

	.top-background {
		background-image: url('$lib/assets/backgroundTop.svg');
	}

	.bottom-background {
		background-image: url('$lib/assets/backgroundBottom.svg');
	}
</style>
