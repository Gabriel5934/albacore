<script lang="ts">
	import lead from '$lib/assets/lead.svg';
	import performance from '$lib/assets/performance.svg';
</script>

<div class="flex flex-col gap-16">
	<div class="flex flex-col gap-16 pt-8">
		<div class="p-4 text-2xl font-bold"><h1 class="text-primary">albacore</h1></div>
		<div class="flexStack gap-8">
			<div class="top-background w-full bg-center bg-repeat-space thumbnails" />
			<div class="flexStack justify-center">
				<h2 class="text-xl">marketing para quem quer</h2>
				<h2 class="text-4xl font-bold text-primary">empreender</h2>
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
				<h2 class="text-3xl font-bold">Gere Leads</h2>
				<h2 class="text-base">colete dados de clientes potenciais</h2>
			</div>
			<img src={lead} alt="formulário para coletar emails" />
		</div>
		<div class="flexStack">
			<h2 class="text-3xl font-bold">Com a cara da sua marca</h2>
			<h2 class="text-base">não tenha que escolher templates genéricas</h2>
		</div>
		<div class="flexStack">
			<h2 class="text-3xl font-bold">Projetos ágeis</h2>
			<h2 class="text-base">entregue em 1 semana</h2>
		</div>
		<div class="flexStack gap-4">
			<div class="flexStack">
				<h2 class="text-3xl font-bold">Foco em performance</h2>
				<h2 class="text-base">para melhores resultados no Google</h2>
			</div>
			<img src={performance} alt="google lighthouse score" class="lighthouse" />
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

	.lighthouse {
		height: 90px;
	}
</style>
