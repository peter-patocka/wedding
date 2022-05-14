class PersonDiedException extends RuntimeException {

    public Person person;

    public PersonDiedException(Person person) {
        this.person = person;
    }

    public PersonDiedException(Person person, Throwable throwable) {
        super(throwable);
        this.person = person;
    }

    public Person getPerson() {
        return person;
    }
}
