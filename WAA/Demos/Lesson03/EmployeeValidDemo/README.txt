
Look at Employee for Validation example 
Disallowed Fields example - need to uncomment ID in Binder


https://stackoverflow.com/questions/43574426/how-to-resolve-java-lang-noclassdeffounderror-javax-xml-bind-jaxbexception-in-j
javax.xml.bind.JAXBException: The JAXB APIs are considered to be Java EE APIs, and therefore are no longer contained on the default class path in Java SE 9. In Java 11 they are completely removed from the JDK.

add maven dependency to solve this problem.

Exception might throw with JDK 9 and higher if you're user Hibernate-validator version lower than 6
1. enable debug level in order to see actual exception - log4j.properties
log4j.rootLogger=DEBUG, file, stdout
2. Add dependency
<dependency>
			<groupId>javax.xml.bind</groupId>
			<artifactId>jaxb-api</artifactId>
			<version>2.2.11</version>
</dependency>
The change is made because 
The JAXB APIs are considered to be Java EE APIs, 
and therefore are no longer contained on the default class path in Java SE 9. 
In Java 11 they are completely removed from the JDK.


https://stackoverflow.com/questions/43574426/how-to-resolve-java-lang-noclassdeffounderror-javax-xml-bind-jaxbexception-in-j



Member Form;
The age has default value 0 displayed in the form. 
This is because the Member domain, the age type is int, change to Integer will solve the problem. 
Meanwhile, need to change getters method to makes sure return Integer, not int. Better to change setters too.
And change MemberValidator to check null to avoid NullPointerException


Constructor DI:
must add autowired on the constuctor, otherwise, looking for default constructor, cannot do bean injection 






