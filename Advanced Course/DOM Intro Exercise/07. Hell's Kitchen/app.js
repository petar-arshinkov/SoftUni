function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textAreaRef = document.querySelector("textarea");
   let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
   let bestRestaurantWorkers = document.querySelector("#workers p");
   //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]

   function onClick() {
      let data = JSON.parse(textAreaRef.value);
      let result = {};
      for (let line of data) {
         let [name, workers] = line.split(" - ");

         if (!result.hasOwnProperty(name)) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }

         let curentWorkers = getArrOfWorkers(workers, result[name].workers)
         result[name].workers = sortWorkers(curentWorkers);
         updateSalary(result[name]);
      }
      let bestRestaurant = findBestRestaurant(result);

      appendBestRestaurantInfo(bestRestaurant);
      appendBestRestaurantWorkersInfo(bestRestaurant[1].workers)

   }
   function appendBestRestaurantWorkersInfo(workers) {
      let buff = "";

      workers.forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);
      bestRestaurantWorkers.textContent = buff;
   }
   function appendBestRestaurantInfo(data) {
      bestRestaurantInfo.textContent = `Name: ${data[0]} Average Salary: ${data[1].avgSalary.toFixed(2)} Best Salary: ${data[1].bestSalary.toFixed(2)} `
   }

   function getArrOfWorkers(workersData, existWorkers) {
      let arrOfWorkers = workersData.split(", ");
      for (let tokens of arrOfWorkers) {
         let [name, salary] = tokens.split(" ");
         salary = Number(salary);
         existWorkers.push({
            name,
            salary
         })
      }
      return existWorkers;

   }

   function updateSalary(restaurant) {
      let sumOfSalary = 0;
      let bestSalary = 0;
      restaurant.workers.forEach(worker => {
         sumOfSalary += worker.salary;
         if (bestSalary < worker.salary) {
            bestSalary = worker.salary
         }
      });

      restaurant.bestSalary = bestSalary;
      restaurant.avgSalary = sumOfSalary / restaurant.workers.length;
   }

   function sortWorkers(workers) {
      return workers.sort((workerA, workerB) => workerB.salary - workerA.salary);
   }

   function findBestRestaurant(restaurants) {
      return Object.entries(restaurants).sort((a, b) => {
         return b[1].avgSalary - a[1].avgSalary;
      })[0];
   }
}