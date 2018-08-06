package com.example.beastmodewebdevysmolyar.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.beastmodewebdevysmolyar.models.Widget;


public interface WidgetRepository extends CrudRepository<Widget, Integer>{
	
	@Query("SELECT w FROM Widget w WHERE w.id=:widgetId")
	Widget findWidgetById(@Param("widgetId") int widgetId);

}
