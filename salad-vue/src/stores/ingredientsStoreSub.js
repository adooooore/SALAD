import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useIngredientsStore = defineStore('ingredients', () => {
    const ingredients = ref([
        {
            name: '모짜렐라 치즈',
            image: 'menu1.png',
            weight: 60,
            calories: 42,
            carbs: 10,
            protein: 1,
            fat: 0.2,
            quantity: ref(0),
            more: ref(false),
        },
    ]);

    const selectedIngredients = ref([]);

    const totalCalories = computed(() => {
        return selectedIngredients.value.reduce((sum, ingredient) => {
            return sum + ingredient.quantity * ingredient.calories;
        }, 0);
    });

    const toggleIngredient = (ingredient) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);

        if (index === -1) {
            // 이미 선택된 재료가 5개인 경우 더 이상 선택할 수 없도록 함
            if (selectedIngredients.value.length >= 5) {
                alert('최대 5개의 재료만 선택할 수 있습니다.');
                return;
            }
            selectedIngredients.value.push(ingredient);
        } else {
            selectedIngredients.value.splice(index, 1);
        }

        saveToLocalStorage();
    };

    const updateQuantity = (ingredient, quantity) => {
        const index = selectedIngredients.value.findIndex(i => i.name === ingredient.name);
        console.log('updateQuantity 함수 실행');
        if (index !== -1) {
            selectedIngredients.value[index].quantity = quantity;
            console.log(`재료: ${ingredient.name}, 수량: ${quantity}`);
        } else {
            selectedIngredients.value.push({ ...ingredient, quantity });
        }
        saveToLocalStorage();
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('totalCalories', totalCalories.value);
        localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients.value.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity
        }))));
    };

    watch(selectedIngredients, () => {
        saveToLocalStorage();
    }, { deep: true });


    return {
        ingredients,
        selectedIngredients,
        totalCalories,
        toggleIngredient,
        updateQuantity,
    };
});