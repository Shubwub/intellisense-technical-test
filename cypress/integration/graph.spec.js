describe("Table functionality", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Initially shows that there is no data to graph", () => {
		cy.get("[data-name=emptyGraph]").should("exist");
	});
	it("Clicking an item in the table adds it to the graph", () => {
		cy.get("[data-name=sample-name]")
			.first()
			.click()
			.get("[data-name=emptyGraph]")
			.should("not.exist");
	});
	it("Clicking an item already added to the graph should remove it from the graph", () => {
		cy.get("[data-name=sample-name]")
			.first()
			.click()
			.click()
			.get("[data-name=emptyGraph]")
			.should("exist");
	});
	it("Clicking the clear graph button should clear the graph", () => {
		cy.get("[data-name=sample-name]").each((sample) => {
			sample.click();
		});
		cy.get("[data-name=clearGraph]")
			.click()
			.get("[data-name=emptyGraph]")
			.should("exist");
	});
});
