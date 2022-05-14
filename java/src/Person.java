class Person {

    private String name;
    private Person married;

    public Person(String name) {
        this.name = name;
    }

    public void setMarried(Person married) {
        this.married = married;
    }

    public Person getMarried() {
        return married;
    }

    public String getName() {
        return name;
    }
}
