This demo is for lesson: Spring MVC Validation

1. Must escape special character in errormessage.properties file such as &. If not, the following replacement {1} won't get correct value.

Be aware of the problem: If form doesn't have multipart data like image, pdf, don't put enctype=multipart/form-data which will cause validation failure.

Spring Validation & Bean Validation are not integrated to work together in this demo. please see p208 for details about combination.

See webstore07 show Spring validation for details demo which matches slides.