<script lang="ts">
	import { page } from '$app/stores';

	const { client } = $page.params;
</script>

{#if client === 'tuka'}
	<div class="flex flex-col gap-16">
		<div class="flex flex-col gap-16 py-8 px-4">
			<h1 class="text-primary font-bold text-2xl">gandrade</h1>
		</div>

		<div class="flexStack gap-8">
			<div class="flexStack justify-center gap-8">
				<div>
					<h2 class="text-4xl font-bold text-center">Tuka</h2>
					<h2 class="text-lg font-bold text-center">Bike Sport Brasil</h2>
				</div>
				<a
					href="https://www.figma.com/proto/pWdKod9PvwZFdxOkFjL7UV/tuka?page-id=108%3A134&node-id=212-5&viewport=-102%2C579%2C0.81&t=cPeU84G9yh2Z72Jk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=108%3A135"
					class="link">Protótipo</a
				>
			</div>
		</div>
	</div>
{:else}
	<h1>Cliente não encontrado</h1>
{/if}
