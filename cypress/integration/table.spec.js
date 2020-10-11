describe("Table functionality", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Loads data from API and displays it in a table when no faults", () => {
		cy.get("[data-name=error]").should("not.exist");
	});
	it("Table data can be sorted alphabetically by metric", () => {
		const original = [];
		let sorted = [];

		cy.get("[data-name=sample-name]")
			.each((sample) => {
				original.push(sample.text());
			})
			.then(() => {
				cy.get("[data-name=metric-sort]")
					.click({ force: true })
					.get("[data-name=sample-name]")
					.each((sample) => {
						sorted.push(sample.text());
					})
					.then(() => {
						const sortedTest = original.sort((a, b) => {
							if (a.toUpperCase() > b.toUpperCase()) {
								return -1;
							}
							return 1;
						});
						expect(sorted).to.eql(sortedTest);
						sorted = [];
					});
				cy.get("[data-name=metric-sort]")
					.click({ force: true })
					.get("[data-name=sample-name]")
					.each((sample) => {
						sorted.push(sample.text());
					})
					.then(() => {
						const sortedTest = original.sort((a, b) => {
							if (a.toUpperCase() < b.toUpperCase()) {
								return -1;
							}
							return 1;
						});
						expect(sorted).to.eql(sortedTest);
					});
			});
	});
	it("Table data can be sorted numerically by value", () => {
		const original = [];
		let sorted = [];

		cy.get("[data-name=sample-value]")
			.each((sample) => {
				original.push(parseFloat(sample.text()));
			})
			.then(() => {
				cy.get("[data-name=value-sort]")
					.click({ force: true })
					.get("[data-name=sample-value]")
					.each((sample) => {
						sorted.push(parseFloat(sample.text()));
					})
					.then(() => {
						const sortedTest = original.sort((a, b) => a - b);
						expect(sorted).to.eql(sortedTest);
						sorted = [];
					});
				cy.get("[data-name=value-sort]")
					.click({ force: true })
					.get("[data-name=sample-value]")
					.each((sample) => {
						sorted.push(parseFloat(sample.text()));
					})
					.then(() => {
						const sortedTest = original.sort((a, b) => b - a);
						expect(sorted).to.eql(sortedTest);
					});
			});
	});
});
