<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-servers-detail></app-servers-detail>
        </div>
        <hr>
        <app-footer></app-footer>      
    </div>
    
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Servers from './components/Servers'
import Details from './components/ServerDetails'
export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-servers': Servers,
        'app-servers-detail': Details
    }
}
</script>

<style>

</style>
