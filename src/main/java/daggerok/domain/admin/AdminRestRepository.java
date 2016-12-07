package daggerok.domain.admin;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface AdminRestRepository extends MongoRepository<Admin, String> {

    /**
     * http :8080/api/admins/search/rmAll\?username=Ololo
     * or
     * curl localhost:8080/api/admins/search/rmAll\?username=Ololo
     */
    @RestResource(
            rel = "rmAll",
            path = "rmAll",
            description = @Description("delete all by username"))
    Long deleteAllByUsername(@Param("username") final String username);

}
