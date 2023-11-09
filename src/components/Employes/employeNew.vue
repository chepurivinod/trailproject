<template>
    <div class="emplyes_view">
        <div>
            <div>
                <h1>employe Info</h1>
                <p>Edit</p>
            </div>
            <div>
                <form @submit.prevent="newEmployee()">
                <div class="form-controll">
                    <label for="name">name : </label>
                    <input type="text" id="name" name="name" v-model="employee.name" required>
                </div>
                <div class="form-controll">
                    <label for="email">Email : </label>
                    <input type="email" id="email" name="email" v-model="employee.email" required>
                </div>
                    <button class="formbutton">submit</button>
                </form>
            </div>

        </div>
        <div>
            <section>
                <h1>Employes List</h1>
            </section>
            <section v-for="employe in employees" :key="employe.name">
                <h1 @click="toggleEmail(employe)">{{ employe.name }}</h1>
                <h4 v-if="employe.showemail">{{ employe.email }}</h4>
            </section>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        const employee = ref({
            name: '',
            email: '',
            showemail: false
        })
        const employees = ref([{ name: 'em1', email: 'yahooo@gmail.com',showemail: false }, { name: 'em2', email: 'google@gmail.com',showemail: false }]);

        function newEmployee() {
            employees.value.push(employee.value)
            employee.value = {}

        }

        function toggleEmail(employee) {
            employee.showemail =! employee.showemail;
        }


        return {
            employees, employee, newEmployee, toggleEmail
        }
    }

}
</script>
<style scoped>
.emplyes_view {
    display : grid;
    grid-template-columns: 3fr 5fr;
}
.form-controll {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 0.5em
}

</style>