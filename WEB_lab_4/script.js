class Projector {
    constructor(model, resolution, inputType, price) {
        this.model = model;
        this.resolution = resolution;
        this.inputType = inputType;
        this.price = price;
    }
}

class ProjectorCollection {
    constructor() {
        this.projectors = [];
    }

    addProjector(projector) {
        this.projectors.push(projector);
    }

    editProjector(index, updatedProjector) {
        if (index >= 0 && index < this.projectors.length) {
            this.projectors[index] = updatedProjector;
        }
    }

    deleteProjector(index) {
        if (index >= 0 && index < this.projectors.length) {
            this.projectors.splice(index, 1);
        }
    }

    getProjectors() {
        return this.projectors;
    }
}

const projectorCollection = new ProjectorCollection();

function displayProjectors(projectorsToDisplay) {
    const projectorList = document.getElementById("projectorList");
    projectorList.innerHTML = "";

    const projectors = projectorsToDisplay || projectorCollection.getProjectors();

    projectors.forEach((projector, index) => {
        const projectorDiv = document.createElement("div");
        projectorDiv.classList.add("projector-info");
        projectorDiv.innerHTML = `
            <h3>Model: ${projector.model}</h3>
            <p>Resolution: ${projector.resolution}</p>
            <p>Input Type: ${projector.inputType}</p>
            <p>Price: ${projector.price.toFixed(2)}</p>
            <hr>
            <button class="editButton" onclick="editProjector(${index})">Edit</button>
            <button class="deleteButton" onclick="deleteProjector(${index})">Delete</button>
        `;
        projectorDiv.dataset.index = index;
        projectorList.appendChild(projectorDiv);
    });
}

function calculateTotalPrice(projectors) {
    let totalPrice = 0;

    projectors.forEach((projector) => {
        totalPrice += projector.price;
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function saveProjector() {
    const model = document.getElementById("model").value;
    const resolution = document.getElementById("resolution").value;
    const inputType = document.getElementById("InputType").value;
    const price = parseFloat(document.getElementById("price").value);

    if (model && resolution && inputType && !isNaN(price) && price >= 0) {
        const newProjector = new Projector(model, resolution, inputType, price);
        projectorCollection.addProjector(newProjector);
        clearForm();
        displayProjectors();
        toggleCreateProjectorSection();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
}

function clearForm() {
    document.getElementById("model").value = "";
    document.getElementById("resolution").value = "";
    document.getElementById("InputType").value = "";
    document.getElementById("price").value = "";
    document.getElementById("save-projector-button").textContent = "Save";
    document.getElementById("save-projector-button").onclick = saveProjector;
}

function editProjector(index) {
    const projector = projectorCollection.getProjectors()[index];
    const modelInput = document.getElementById("model");
    const resolutionInput = document.getElementById("resolution");
    const inputTypeInput = document.getElementById("InputType");
    const priceInput = document.getElementById("price");

    modelInput.value = projector.model;
    resolutionInput.value = projector.resolution;
    inputTypeInput.value = projector.inputType;
    priceInput.value = projector.price;

    const saveButton = document.getElementById("save-projector-button");
    saveButton.textContent = "Edit";
    saveButton.onclick = function () {
        saveEditedProjector(index);
    };

    toggleCreateProjectorSection();
}

function saveEditedProjector(index) {
    const model = document.getElementById("model").value;
    const resolution = document.getElementById("resolution").value;
    const inputType = document.getElementById("InputType").value;
    const price = parseFloat(document.getElementById("price").value);

    if (model && resolution && inputType && !isNaN(price) && price >= 0) {
        const updatedProjector = new Projector(model, resolution, inputType, price);
        projectorCollection.editProjector(index, updatedProjector);
        clearForm();
        displayProjectors();
        toggleCreateProjectorSection();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
}

document.getElementById("showProjectors").addEventListener("click", toggleCreateProjectorSection);

document.getElementById("count_button").addEventListener("click", () => {
    calculateTotalPrice(projectorCollection.getProjectors());
});

document.getElementById("resetTotalPrice").addEventListener("click", () => {
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = "Total Price: $0.00";
});

document.getElementById("calculateSearchedTotalPrice").addEventListener("click", () => {
    const findInput = document.getElementById("find_input").value.toLowerCase();
    const searchedProjectors = projectorCollection.getProjectors().filter((projector) => {
        return projector.model.toLowerCase().includes(findInput);
    });
    calculateTotalPrice(searchedProjectors);
});

document.getElementById("sort_button").addEventListener("click", () => {
    const sortedProjectors = [...projectorCollection.getProjectors()];
    sortedProjectors.sort((a, b) => b.price - a.price);
    displayProjectors(sortedProjectors);
});

document.getElementById("find_button").addEventListener("click", () => {
    findProjectors();
});

document.getElementById("cancel_find_button").addEventListener("click", () => {
    cancelSearch();
});

function deleteProjector(index) {
    if (confirm("Are you sure you want to delete this projector?")) {
        projectorCollection.deleteProjector(index);
        displayProjectors();
    }
}

function findProjectors() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    const searchResults = projectorCollection.getProjectors().filter((projector) => {
        return projector.model.toLowerCase().includes(findInput);
    });

    displayProjectors(searchResults);
}

function cancelSearch() {
    document.getElementById("find_input").value = "";
    displayProjectors();
}

function toggleCreateProjectorSection() {
    const projectorAside = document.getElementById("projectorAside");
    const projectorList = document.getElementById("projectorList");

    if (projectorAside.classList.contains("hidden")) {
        projectorAside.classList.remove("hidden");
        projectorList.classList.add("hidden");
        clearForm();
    } else {
        projectorAside.classList.add("hidden");
        projectorList.classList.remove("hidden");
    }
}

function scrollToBottom() {
    window.scroll(0, document.body.scrollHeight);
}

function reloadPage() {
    location.reload();
}

displayProjectors();
