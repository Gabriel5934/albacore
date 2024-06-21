<script lang="ts">
	import { goto } from '$app/navigation';

	let client: string;

	const goToClient = () => goto(`clients/${client.toLocaleLowerCase()}`);
</script>

<div class="flex flex-col gap-16">
	<div class="flex flex-col gap-16 py-8 px-4">
		<h1 class="text-primary font-bold text-2xl">gandrade</h1>
	</div>

	<div class="flex items-center flex-col gap-4">
		<label class="form-control w-full max-w-xs">
			<div class="label">
				<span class="label-text">Código do Cliente</span>
			</div>
			<input
				type="text"
				placeholder="Digite aqui..."
				class="input input-bordered w-full max-w-xs"
				bind:value={client}
			/>
		</label>
		<div><button class="btn" on:click={goToClient}>ACESSAR</button></div>
	</div>
</div>
