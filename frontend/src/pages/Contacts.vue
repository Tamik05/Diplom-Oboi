<template>
    <Layout>
        <section class="contacts container">
            <h1>Контакты</h1>
            <section class="contacts-content content">
                <div class="contacts-wrapper">
                    <p class="adress">
                        <strong>Адрес: </strong>
                        344022, Ростовская область, г. Ростов-на-Дону,ул. Максима Горького, 226/43 . "Архив Спейс" ул. Пушкинская 48/41
                    </p>
                    <p class="adress">
                        <strong>Время работы: </strong>
                        Режим работы: Пн-Сб  с 10:00 до 20:00 , перерыв с 15:00 до 16:00 , Воскресенье выходной
                    </p>
                    <p class="adress">
                        <strong>Телефон </strong>
                        +7 968 444 44 98
                    </p>
                    <p class="adress">
                        <strong>Почта </strong>
                        <a href="mailto:test@mail.ru">test@mail.ru</a>
                    </p>
                    <p class="adress">
                        <strong>Телефон </strong>
                        +7 968 444 44 98
                    </p>
                </div>
                <div class="contacts-wrapper">
                    <a target="_blank" href="https://yandex.ru/maps/39/rostov-na-donu/?ll=39.721248%2C47.220994&mode=poi&poi%5Bpoint%5D=39.690342%2C47.218101&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57627819756&z=14">
                        <img src="/img/map.png" alt="">
                    </a>
                </div>
            </section>
        </section>
    </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
</script>

<style lang="scss" scoped>
.contacts { 
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 22pt;
    }

    &-content {
        display: flex;
        gap: 20px;
    }

    &-wrapper {
        display: flex;
        flex: 1 0 50%;
        font-weight: 300;
        flex-direction: column;
        gap: 15px;
    }
}
</style>