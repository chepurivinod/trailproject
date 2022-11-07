<template>
    <Posts :posts="posts"/>
</template>

<script>
import Posts from '../components/AllPosts/posts.vue';


export default {
name: 'HomePage',
components: { Posts },
setup() {

    const posts = [
        {title : 'ForntEnd Devoloper', body : 'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.', id: 1},
        {title : 'backend Developer', body : 'Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see.', id: 2},
        {title :'fullstack Developer', body : 'A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)', id: 3}
    ];

    return { posts }
}
}
</script>

<style scoped>
</style>