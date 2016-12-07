package daggerok.domain.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource
public interface UserRestRepository extends MongoRepository<User, String> {

    /**
     * http :8080/api/users/search/rmLike\?username=user
     * or
     * curl localhost:8080/api/users/search/rmLike\?username=user
     */
    @RestResource(
            rel = "rmLike",
            path = "rmLike",
            description = @Description("delete all by username has"))
    Long deleteAllByUsernameLike(@Param("username") final String username);
}
