package Test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "C:\\Raksh\\Tranning\\SDET\\Alchemy Jobs\\Features",
    glue = {"stepDefinitions"},
    tags = {"@smoke2"},
    plugin = {"html: test-reports"},
    strict = false
)
public class ActivitesRunner {

}
