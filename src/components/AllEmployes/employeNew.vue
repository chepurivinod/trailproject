<template>
    <div class="emplyes_view">
        <div>
            <section>
                <h2 class="header-list">Employes List</h2>
            </section>
            <section v-for="employe in employees" :key="employe.name">
                <h1 class="name-emp" @click="toggleEmail(employe)">{{ employe.name }}</h1>
                <h4 class=email-emp v-if="employe.showemail">{{ employe.email }}</h4>
            </section>
        </div>
        <div>
            <div class="header">
                <div>
                    <h4 class="name-emp" v-if="addEmployee">Enter New Employee Details</h4>
                </div>
                <div class="add-btn">
                    <button type="button" class="addEmpButton" @click="toggleAddNewEmployee" v-if="!addEmployee">
                    Add New Employee 
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path fill="#5d7ad0" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                    </button>
                </div>
            </div>
           
            <div v-if="addEmployee">
                <form @submit.prevent="addNewEmployee()">
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
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const employee = ref({
            name: '',
            email: '',
            showemail: false
        });
        let addEmployee = ref(false);
        const employees = ref([{ name: 'em1', email: 'yahooo@gmail.com',showemail: false }, { name: 'em2', email: 'google@gmail.com',showemail: false }]);
        function toggleAddNewEmployee () {
            addEmployee.value = !addEmployee.value
        }
        function addNewEmployee() {
            employees.value.push(employee.value)
            employee.value = {}
            addEmployee.value = !addEmployee.value

        }

        function toggleEmail(employee) {
            employee.showemail =! employee.showemail;
        }


        return {
            employees, addEmployee, employee, addNewEmployee, toggleEmail, toggleAddNewEmployee
        }
    }

}
</script>
<style scoped>
.header {
    display: grid;
    grid-template-columns: 4fr 2fr;
    padding: 0.56em;
    align-items: center;
}
.header h1 {
    margin: 0
}
.header-list {
    color:#f0331a;
}                           
.name-emp {
    color: blue;
    
}
.email-emp {
    color: rgba(179, 0, 30, 0.807);
    
}
.addEmpButton {
    border: none;
    background-color:#fbfbfbde;
    color: #f1197eeb;
    padding: 0.5em 0.4em;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
}
.emplyes_view {
    display : grid;
    grid-template-columns: minmax(200px, 3fr) 3fr;
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