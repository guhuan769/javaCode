package com.itgh;

import org.junit.Assert;
import org.junit.Test;

import javax.naming.Name;

public class DemoTest {
    @Test
    public void testSay() {
        Demo d = new Demo();
        String ret = d.say("itgh");
        Assert.assertEquals("Hellowrlditgh", ret);
    }
}
