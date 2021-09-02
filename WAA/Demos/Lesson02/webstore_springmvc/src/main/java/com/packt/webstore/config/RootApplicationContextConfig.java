package com.packt.webstore.config;

import javax.sql.DataSource;

import com.packt.webstore.domain.Test;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@Configuration
@ComponentScan("com.packt.webstore")
public class RootApplicationContextConfig {

   @Bean
   public DataSource dataSource() {
      EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
      EmbeddedDatabase db = builder
         .setType(EmbeddedDatabaseType.HSQL)
         .addScript("db/sql/create-table.sql")
         .addScript("db/sql/insert-data.sql")
         .build();
      return db;
   }

   @Bean
   public Test test(){
      return new Test();
   }

   @Bean
   public NamedParameterJdbcTemplate getJdbcTemplate() {
      return new NamedParameterJdbcTemplate(dataSource());
   }
}
