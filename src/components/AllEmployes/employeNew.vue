<template>
    <div class="emplyes_view">
        <div>
            <div>
                <h1>Add New Employee</h1>
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
                    <button class="form-submit">Submit</button>
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
    grid-template-columns: 3fr minmax(200px, 5fr);
}
.form-controll {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 3fr);
    padding: 0.56em
}
.form-submit {
 border: none;
 background-color: #f1197eeb;
 padding: 8px;
 border-radius: 0.7em;
 color: #ffffffde;
 font-weight: bolder;
 font-size: 16px;
}

</style>