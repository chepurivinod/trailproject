<template>
    <div class="Error">
        <h1>Oops <br> 404 Page not found!</h1>
        <h2>To see home page data please run this"<br> npx json-server --watch data/db.json --port 3000 <br>" command in new terminL without qotes</h2>
    </div>
</template>
<style scoped>
.Error {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

h1, h2 {
    color:brown;
    font-size: 35px;
    font-weight: bold;
}
</style>